// Subject Line Generator Templates
// MVP: template-based generation with keyword filling

export interface GeneratorTemplate {
  template: string;
  type: EmailType;
  tone: Tone;
  hasEmoji: boolean;
}

export type EmailType = 'marketing' | 'newsletter' | 'cold-email' | 'follow-up' | 'notification';
export type Tone = 'professional' | 'friendly' | 'urgent' | 'humorous' | 'fomo';

const templates: GeneratorTemplate[] = [
  // Marketing - Professional
  { template: 'Introducing {topic}: Everything You Need to Know', type: 'marketing', tone: 'professional', hasEmoji: false },
  { template: '{topic} - Your Exclusive Early Access Is Here', type: 'marketing', tone: 'professional', hasEmoji: false },
  { template: 'How {topic} Can Transform Your Results', type: 'marketing', tone: 'professional', hasEmoji: false },
  { template: 'The Smart Way to {topic}', type: 'marketing', tone: 'professional', hasEmoji: false },

  // Marketing - Friendly
  { template: 'Hey! Check out our latest {topic}', type: 'marketing', tone: 'friendly', hasEmoji: false },
  { template: 'You asked, we delivered: {topic}', type: 'marketing', tone: 'friendly', hasEmoji: false },
  { template: 'Good news about {topic}!', type: 'marketing', tone: 'friendly', hasEmoji: false },
  { template: 'We think you will love this: {topic}', type: 'marketing', tone: 'friendly', hasEmoji: false },

  // Marketing - Urgent
  { template: 'Last Chance: {topic} Ends Tonight', type: 'marketing', tone: 'urgent', hasEmoji: false },
  { template: 'Only 24 Hours Left to Get {topic}', type: 'marketing', tone: 'urgent', hasEmoji: false },
  { template: 'Don\'t Miss Out on {topic} - Ending Soon', type: 'marketing', tone: 'urgent', hasEmoji: false },
  { template: 'Final Hours: Save Big on {topic}', type: 'marketing', tone: 'urgent', hasEmoji: false },

  // Marketing - Humorous
  { template: 'We have a confession about {topic}...', type: 'marketing', tone: 'humorous', hasEmoji: false },
  { template: 'Plot twist: {topic} just got better', type: 'marketing', tone: 'humorous', hasEmoji: false },
  { template: 'No boring emails here - just {topic}', type: 'marketing', tone: 'humorous', hasEmoji: false },
  { template: 'Your inbox called. It wants {topic}', type: 'marketing', tone: 'humorous', hasEmoji: false },

  // Marketing - FOMO
  { template: '500+ people already signed up for {topic}', type: 'marketing', tone: 'fomo', hasEmoji: false },
  { template: 'Everyone is talking about {topic}', type: 'marketing', tone: 'fomo', hasEmoji: false },
  { template: 'The secret to {topic} (others don\'t want you to know)', type: 'marketing', tone: 'fomo', hasEmoji: false },
  { template: 'Limited spots left for {topic}', type: 'marketing', tone: 'fomo', hasEmoji: false },

  // Newsletter - Professional
  { template: 'This Week in {topic}: Key Updates & Insights', type: 'newsletter', tone: 'professional', hasEmoji: false },
  { template: '{topic} Digest: Top Stories This Month', type: 'newsletter', tone: 'professional', hasEmoji: false },
  { template: 'Your Weekly {topic} Briefing', type: 'newsletter', tone: 'professional', hasEmoji: false },

  // Newsletter - Friendly
  { template: 'Happy Monday! Here is your {topic} update', type: 'newsletter', tone: 'friendly', hasEmoji: false },
  { template: 'Fresh off the press: {topic} news', type: 'newsletter', tone: 'friendly', hasEmoji: false },
  { template: 'What is new in {topic} this week?', type: 'newsletter', tone: 'friendly', hasEmoji: false },

  // Newsletter - Urgent
  { template: 'Breaking: Major {topic} Update You Need Now', type: 'newsletter', tone: 'urgent', hasEmoji: false },
  { template: 'Alert: Important {topic} Changes Today', type: 'newsletter', tone: 'urgent', hasEmoji: false },

  // Newsletter - Humorous
  { template: 'Your {topic} newsletter (the only email worth reading)', type: 'newsletter', tone: 'humorous', hasEmoji: false },
  { template: 'TL;DR: The best {topic} news, no fluff', type: 'newsletter', tone: 'humorous', hasEmoji: false },

  // Newsletter - FOMO
  { template: '10,000+ readers can\'t be wrong about {topic}', type: 'newsletter', tone: 'fomo', hasEmoji: false },
  { template: 'The {topic} trends everyone is watching', type: 'newsletter', tone: 'fomo', hasEmoji: false },

  // Cold Email - Professional
  { template: 'Quick question about your {topic} strategy', type: 'cold-email', tone: 'professional', hasEmoji: false },
  { template: '{topic}: A Partnership Opportunity', type: 'cold-email', tone: 'professional', hasEmoji: false },
  { template: 'Helping companies like yours with {topic}', type: 'cold-email', tone: 'professional', hasEmoji: false },

  // Cold Email - Friendly
  { template: 'Loved your work on {topic} - quick idea', type: 'cold-email', tone: 'friendly', hasEmoji: false },
  { template: 'Fellow {topic} enthusiast here!', type: 'cold-email', tone: 'friendly', hasEmoji: false },
  { template: 'Your {topic} post inspired me', type: 'cold-email', tone: 'friendly', hasEmoji: false },

  // Cold Email - Urgent
  { template: 'Time-sensitive: {topic} opportunity closing', type: 'cold-email', tone: 'urgent', hasEmoji: false },
  { template: '{topic} changes coming - are you prepared?', type: 'cold-email', tone: 'urgent', hasEmoji: false },

  // Cold Email - Humorous
  { template: 'Not another cold email about {topic}... ok maybe', type: 'cold-email', tone: 'humorous', hasEmoji: false },
  { template: 'I promise this {topic} email is worth 30 seconds', type: 'cold-email', tone: 'humorous', hasEmoji: false },

  // Cold Email - FOMO
  { template: 'Your competitors are already using {topic}', type: 'cold-email', tone: 'fomo', hasEmoji: false },
  { template: '3 companies in your space just adopted {topic}', type: 'cold-email', tone: 'fomo', hasEmoji: false },

  // Follow-up - Professional
  { template: 'Following up on our {topic} discussion', type: 'follow-up', tone: 'professional', hasEmoji: false },
  { template: 'Re: {topic} - Next Steps', type: 'follow-up', tone: 'professional', hasEmoji: false },
  { template: '{topic}: Any thoughts on my proposal?', type: 'follow-up', tone: 'professional', hasEmoji: false },

  // Follow-up - Friendly
  { template: 'Checking in about {topic} - no rush!', type: 'follow-up', tone: 'friendly', hasEmoji: false },
  { template: 'Hey! Just bumping {topic} to the top', type: 'follow-up', tone: 'friendly', hasEmoji: false },
  { template: 'Still interested in {topic}? Let me know!', type: 'follow-up', tone: 'friendly', hasEmoji: false },

  // Follow-up - Urgent
  { template: 'Final follow-up: {topic} decision needed', type: 'follow-up', tone: 'urgent', hasEmoji: false },
  { template: '{topic} deadline approaching - your input needed', type: 'follow-up', tone: 'urgent', hasEmoji: false },

  // Follow-up - Humorous
  { template: 'Friendly nudge about {topic} (not stalking, promise)', type: 'follow-up', tone: 'humorous', hasEmoji: false },
  { template: 'Did my {topic} email get lost in space?', type: 'follow-up', tone: 'humorous', hasEmoji: false },

  // Follow-up - FOMO
  { template: 'Others have already responded about {topic}', type: 'follow-up', tone: 'fomo', hasEmoji: false },
  { template: '{topic} spots filling up - where do you stand?', type: 'follow-up', tone: 'fomo', hasEmoji: false },

  // Notification - Professional
  { template: 'Your {topic} has been updated', type: 'notification', tone: 'professional', hasEmoji: false },
  { template: 'Action Required: {topic} Review', type: 'notification', tone: 'professional', hasEmoji: false },
  { template: '{topic}: Important Account Update', type: 'notification', tone: 'professional', hasEmoji: false },

  // Notification - Friendly
  { template: 'Great news! Your {topic} is ready', type: 'notification', tone: 'friendly', hasEmoji: false },
  { template: 'Heads up: {topic} update for you', type: 'notification', tone: 'friendly', hasEmoji: false },

  // Notification - Urgent
  { template: 'Urgent: {topic} requires your attention now', type: 'notification', tone: 'urgent', hasEmoji: false },
  { template: 'Immediate action needed: {topic}', type: 'notification', tone: 'urgent', hasEmoji: false },

  // Notification - Humorous
  { template: 'Ding ding! Your {topic} notification has arrived', type: 'notification', tone: 'humorous', hasEmoji: false },
  { template: 'Your {topic} just did something cool', type: 'notification', tone: 'humorous', hasEmoji: false },

  // Notification - FOMO
  { template: 'You are missing updates on {topic}', type: 'notification', tone: 'fomo', hasEmoji: false },
  { template: '{topic} activity you should not ignore', type: 'notification', tone: 'fomo', hasEmoji: false },
];

const EMOJI_MAP: Record<string, string[]> = {
  marketing: ['🚀', '✨', '🎉', '💥', '🔥', '⭐'],
  newsletter: ['📬', '📰', '📮', '🗞️', '📋', '💡'],
  'cold-email': ['👋', '🤝', '💼', '📩', '🎯', '💡'],
  'follow-up': ['👀', '🔔', '📌', '⏰', '🔄', '💬'],
  notification: ['🔔', '📢', '⚡', '🔵', '📣', '✅'],
};

function extractTopic(description: string): string {
  // Simple topic extraction from description
  const cleaned = description
    .replace(/^(promote|create|write|make|send|draft|compose)\s+(a|an|the|our|my)?\s*/i, '')
    .replace(/\s+(email|message|campaign|newsletter|subject\s*line)s?\s*$/i, '')
    .trim();

  // Capitalize first letter
  if (cleaned.length > 0) {
    return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
  }
  return description.trim();
}

export function generateSubjectLines(
  description: string,
  type: EmailType,
  tone: Tone,
  includeEmoji: boolean,
): string[] {
  const topic = extractTopic(description);

  // Filter templates by type and tone
  let matched = templates.filter(t => t.type === type && t.tone === tone);

  // If not enough matches, also include same type with any tone
  if (matched.length < 5) {
    const additional = templates.filter(t => t.type === type && t.tone !== tone);
    matched = [...matched, ...additional];
  }

  // If still not enough, add from any type with matching tone
  if (matched.length < 5) {
    const additional = templates.filter(t => t.type !== type && t.tone === tone);
    matched = [...matched, ...additional];
  }

  // Take up to 10
  const selected = matched.slice(0, 10);

  return selected.map(t => {
    let line = t.template.replace(/\{topic\}/g, topic);

    if (includeEmoji) {
      const emojis = EMOJI_MAP[type] || EMOJI_MAP.marketing;
      const emoji = emojis[Math.floor(Math.random() * emojis.length)];
      line = `${emoji} ${line}`;
    }

    return line;
  });
}

export const EMAIL_TYPES: { value: EmailType; label: string }[] = [
  { value: 'marketing', label: 'Marketing' },
  { value: 'newsletter', label: 'Newsletter' },
  { value: 'cold-email', label: 'Cold Email' },
  { value: 'follow-up', label: 'Follow-up' },
  { value: 'notification', label: 'Notification' },
];

export const TONES: { value: Tone; label: string }[] = [
  { value: 'professional', label: 'Professional' },
  { value: 'friendly', label: 'Friendly' },
  { value: 'urgent', label: 'Urgent' },
  { value: 'humorous', label: 'Humorous' },
  { value: 'fomo', label: 'FOMO' },
];
