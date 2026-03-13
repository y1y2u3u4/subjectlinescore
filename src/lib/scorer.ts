// Email Subject Line Scoring Engine
// Pure frontend rules-based scoring system

export interface DimensionScore {
  name: string;
  score: number;
  weight: number;
  weightedScore: number;
  feedback: string;
  color: string;
}

export interface ScoreResult {
  totalScore: number;
  grade: string;
  gradeColor: string;
  dimensions: DimensionScore[];
}

const POWER_WORDS = {
  urgency: ['limited', 'hurry', 'now', 'today', 'last chance', 'deadline', 'expires', 'ending soon', 'don\'t miss', 'final', 'act fast', 'running out', 'only', 'hours left'],
  curiosity: ['secret', 'discover', 'revealed', 'surprising', 'unknown', 'hidden', 'shocking', 'unbelievable', 'bizarre', 'mysterious', 'insider', 'little-known'],
  benefit: ['free', 'save', 'exclusive', 'guaranteed', 'proven', 'results', 'boost', 'increase', 'improve', 'unlock', 'gain', 'earn', 'win', 'best', 'top', 'ultimate'],
};

const SPAM_WORDS = [
  'buy now', 'click here', 'act now', 'congratulations', 'winner',
  'cash', 'credit', 'income', 'no obligation', 'risk-free',
  'double your', 'earn extra', 'be your own boss', 'work from home',
  'as seen on', 'order now', 'apply now', 'instant', 'no cost',
  'no fees', 'no catch', 'no gimmick', 'satisfaction guaranteed',
  'call now', 'deal', 'discount', 'lowest price', 'bargain',
  'billion', 'million', 'trillion',
];

const SPAM_PATTERNS = [
  /\bFREE\b/,       // ALL CAPS FREE
  /\bBUY\s*NOW\b/i,
  /\bCLICK\s*HERE\b/i,
  /\bACT\s*NOW\b/i,
  /\bCONGRATULATIONS\b/i,
  /\${2,}/,          // multiple dollar signs
  /!{2,}/,           // multiple exclamation marks
  /[A-Z]{5,}/,       // 5+ consecutive uppercase letters (spammy)
];

function scoreCharacterLength(subject: string): DimensionScore {
  const len = subject.length;
  let score = 100;
  let feedback = '';

  if (len === 0) {
    score = 0;
    feedback = 'Enter a subject line to get started.';
  } else if (len < 10) {
    score = 20;
    feedback = `Too short (${len} chars). Aim for 30-50 characters for optimal open rates.`;
  } else if (len < 20) {
    score = 40;
    feedback = `A bit short (${len} chars). Subject lines with 30-50 characters perform best.`;
  } else if (len < 30) {
    score = 70;
    feedback = `Getting there (${len} chars). The sweet spot is 30-50 characters.`;
  } else if (len <= 50) {
    score = 100;
    feedback = `Perfect length (${len} chars). This is in the optimal 30-50 character range.`;
  } else if (len <= 60) {
    score = 75;
    feedback = `Slightly long (${len} chars). May get truncated on mobile devices.`;
  } else if (len <= 80) {
    score = 50;
    feedback = `Too long (${len} chars). Will be truncated on most mobile email clients.`;
  } else {
    score = 25;
    feedback = `Way too long (${len} chars). Most email clients will cut this off significantly.`;
  }

  if (len > 40 && score > 30) {
    feedback += ' Note: iPhone Mail truncates after ~40 characters.';
  }

  return {
    name: 'Character Length',
    score,
    weight: 0.20,
    weightedScore: score * 0.20,
    feedback,
    color: getScoreColor(score),
  };
}

function scorePowerWords(subject: string): DimensionScore {
  const lower = subject.toLowerCase();
  const found: string[] = [];

  for (const [category, words] of Object.entries(POWER_WORDS)) {
    for (const word of words) {
      if (lower.includes(word)) {
        found.push(`${word} (${category})`);
      }
    }
  }

  let score: number;
  let feedback: string;

  if (found.length === 0) {
    score = 30;
    feedback = 'No power words detected. Try adding urgency, curiosity, or benefit-driven words.';
  } else if (found.length === 1) {
    score = 60;
    feedback = `Found 1 power word: ${found[0]}. Good start!`;
  } else if (found.length === 2) {
    score = 85;
    feedback = `Great! Found ${found.length} power words: ${found.join(', ')}.`;
  } else if (found.length <= 4) {
    score = 100;
    feedback = `Excellent! ${found.length} power words detected: ${found.join(', ')}.`;
  } else {
    score = 70;
    feedback = `${found.length} power words found, but too many can feel pushy. Consider removing some.`;
  }

  return {
    name: 'Power Words',
    score,
    weight: 0.20,
    weightedScore: score * 0.20,
    feedback,
    color: getScoreColor(score),
  };
}

function scoreSpamWords(subject: string): DimensionScore {
  const lower = subject.toLowerCase();
  const found: string[] = [];

  for (const word of SPAM_WORDS) {
    if (lower.includes(word)) {
      found.push(word);
    }
  }

  for (const pattern of SPAM_PATTERNS) {
    if (pattern.test(subject)) {
      const match = subject.match(pattern);
      if (match && !found.includes(match[0].toLowerCase())) {
        found.push(match[0]);
      }
    }
  }

  let score: number;
  let feedback: string;

  if (found.length === 0) {
    score = 100;
    feedback = 'No spam triggers detected. Your subject line looks clean!';
  } else if (found.length === 1) {
    score = 60;
    feedback = `Warning: "${found[0]}" may trigger spam filters. Consider rephrasing.`;
  } else if (found.length === 2) {
    score = 35;
    feedback = `Spam risk! Found ${found.length} triggers: ${found.join(', ')}. High chance of landing in spam folder.`;
  } else {
    score = 10;
    feedback = `High spam risk! ${found.length} triggers found: ${found.join(', ')}. This will likely be flagged as spam.`;
  }

  return {
    name: 'Spam Words',
    score,
    weight: 0.20,
    weightedScore: score * 0.20,
    feedback,
    color: getScoreColor(score),
  };
}

function scoreReadability(subject: string): DimensionScore {
  let score = 50;
  const tips: string[] = [];

  // Has a question mark (increases open rate by ~10%)
  if (subject.includes('?')) {
    score += 15;
    tips.push('Question format boosts open rates by ~10%');
  }

  // Contains numbers (increases open rate by ~36%)
  if (/\d/.test(subject)) {
    score += 15;
    tips.push('Numbers in subject lines increase open rates by ~36%');
  }

  // Reasonable word count (4-9 words is optimal)
  const wordCount = subject.trim().split(/\s+/).length;
  if (wordCount >= 4 && wordCount <= 9) {
    score += 15;
    tips.push(`Good word count (${wordCount} words)`);
  } else if (wordCount < 4) {
    tips.push(`Only ${wordCount} word(s) - might lack context`);
  } else {
    score.toString();
    tips.push(`${wordCount} words is a bit wordy - aim for 4-9 words`);
  }

  // No excessive punctuation
  const punctCount = (subject.match(/[!?.,;:]/g) || []).length;
  if (punctCount <= 2) {
    score += 5;
  } else {
    score -= 10;
    tips.push('Too much punctuation can hurt deliverability');
  }

  score = Math.max(0, Math.min(100, score));

  const feedback = tips.length > 0
    ? tips.join('. ') + '.'
    : 'Readability looks acceptable.';

  return {
    name: 'Readability',
    score,
    weight: 0.15,
    weightedScore: score * 0.15,
    feedback,
    color: getScoreColor(score),
  };
}

function scorePersonalization(subject: string): DimensionScore {
  const lower = subject.toLowerCase();
  const found: string[] = [];

  // Check for merge tags
  if (/\{(first\s*name|name|lastname|company)\}/i.test(subject)) {
    found.push('merge tag');
  }

  // Check for "you/your"
  if (/\byou\b/i.test(subject)) found.push('"you"');
  if (/\byour\b/i.test(subject)) found.push('"your"');

  let score: number;
  let feedback: string;

  if (found.length === 0) {
    score = 30;
    feedback = 'No personalization detected. Adding "you/your" or {FirstName} can boost open rates by 26%.';
  } else if (found.length === 1) {
    score = 75;
    feedback = `Good personalization with ${found[0]}. Personal touches increase engagement.`;
  } else {
    score = 100;
    feedback = `Great personalization! Found: ${found.join(', ')}. This drives higher open rates.`;
  }

  return {
    name: 'Personalization',
    score,
    weight: 0.10,
    weightedScore: score * 0.10,
    feedback,
    color: getScoreColor(score),
  };
}

function scoreEmojiUsage(subject: string): DimensionScore {
  const emojiRegex = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{FE00}-\u{FE0F}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{200D}\u{20E3}]/gu;
  const emojis = subject.match(emojiRegex) || [];
  const count = emojis.length;

  let score: number;
  let feedback: string;

  if (count === 0) {
    score = 60;
    feedback = 'No emojis used. Adding 1-2 relevant emojis can increase open rates by up to 56%.';
  } else if (count <= 2) {
    score = 100;
    feedback = `Good emoji usage (${count}). Emojis help your email stand out in the inbox.`;
  } else if (count <= 4) {
    score = 50;
    feedback = `Too many emojis (${count}). Stick to 1-2 for best results. Excessive emojis look spammy.`;
  } else {
    score = 20;
    feedback = `Way too many emojis (${count}). This will likely trigger spam filters and reduce trust.`;
  }

  return {
    name: 'Emoji Usage',
    score,
    weight: 0.05,
    weightedScore: score * 0.05,
    feedback,
    color: getScoreColor(score),
  };
}

function scoreCapitalization(subject: string): DimensionScore {
  let score = 70;
  let feedback = '';

  const words = subject.trim().split(/\s+/);
  const upperWords = words.filter(w => w === w.toUpperCase() && w.length > 1 && /[A-Z]/.test(w));
  const upperRatio = words.length > 0 ? upperWords.length / words.length : 0;

  // All caps = spam
  if (upperRatio > 0.5 && words.length > 2) {
    score = 15;
    feedback = 'Too much ALL CAPS! This screams spam and will hurt deliverability.';
  } else if (upperRatio > 0.25) {
    score = 40;
    feedback = 'Several words in ALL CAPS. Reduce capitalization to avoid spam filters.';
  } else if (upperWords.length === 1) {
    score = 75;
    feedback = 'One word in caps for emphasis is acceptable, but use sparingly.';
  } else {
    // Check for title case
    const titleCaseWords = words.filter(w => w.length > 0 && w[0] === w[0].toUpperCase() && w.slice(1) === w.slice(1).toLowerCase());
    const titleCaseRatio = titleCaseWords.length / Math.max(words.length, 1);

    if (titleCaseRatio > 0.6 && words.length > 3) {
      score = 90;
      feedback = 'Good use of Title Case. This looks professional and polished.';
    } else {
      score = 80;
      feedback = 'Capitalization looks natural and appropriate.';
    }
  }

  // All lowercase
  if (subject === subject.toLowerCase() && /[a-z]/.test(subject)) {
    score = 65;
    feedback = 'All lowercase can feel too casual. Consider capitalizing the first word at minimum.';
  }

  return {
    name: 'Capitalization',
    score,
    weight: 0.10,
    weightedScore: score * 0.10,
    feedback,
    color: getScoreColor(score),
  };
}

function getScoreColor(score: number): string {
  if (score >= 80) return '#22c55e'; // green
  if (score >= 60) return '#eab308'; // yellow
  if (score >= 40) return '#f97316'; // orange
  return '#ef4444'; // red
}

function getGrade(score: number): { grade: string; color: string } {
  if (score >= 80) return { grade: 'Excellent', color: '#22c55e' };
  if (score >= 60) return { grade: 'Good', color: '#eab308' };
  if (score >= 40) return { grade: 'Fair', color: '#f97316' };
  return { grade: 'Poor', color: '#ef4444' };
}

export function scoreSubjectLine(subject: string): ScoreResult {
  if (!subject.trim()) {
    return {
      totalScore: 0,
      grade: 'N/A',
      gradeColor: '#9ca3af',
      dimensions: [],
    };
  }

  const dimensions = [
    scoreCharacterLength(subject),
    scorePowerWords(subject),
    scoreSpamWords(subject),
    scoreReadability(subject),
    scorePersonalization(subject),
    scoreEmojiUsage(subject),
    scoreCapitalization(subject),
  ];

  const totalScore = Math.round(dimensions.reduce((sum, d) => sum + d.weightedScore, 0));
  const { grade, color } = getGrade(totalScore);

  return {
    totalScore,
    grade,
    gradeColor: color,
    dimensions,
  };
}
