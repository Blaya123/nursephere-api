const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const MODEL = 'llama-3.3-70b-versatile';

const SYSTEM_CONTEXT = `You are Nursphere AI, a nursing education assistant for Nigerian nursing students. 
You provide accurate, helpful information about nursing topics including:
- NMCN exam preparation
- Clinical procedures and nursing skills
- NANDA-I nursing diagnoses
- Dosage calculations
- Nigerian nursing career pathway (BNSc → NMCN → NYSC → Specialization)
- Drug references and nursing considerations

Always be supportive, educational, and context-aware. When you don't know something, say so.
Keep responses concise and practical for nursing students in Nigeria.`;

async function groqChat(messages, temperature = 0.7, maxTokens = 1024) {
  const res = await fetch(GROQ_API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: MODEL,
      messages,
      temperature,
      max_tokens: maxTokens,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Groq API error (${res.status}): ${err}`);
  }

  const data = await res.json();
  return data.choices[0].message.content;
}

export async function chatWithGemini(prompt, history = []) {
  const messages = [
    { role: 'system', content: SYSTEM_CONTEXT },
    ...history.map(h => ({
      role: h.role === 'model' ? 'assistant' : 'user',
      content: h.parts?.[0]?.text || h.content || '',
    })),
    { role: 'user', content: prompt },
  ];

  return groqChat(messages, 0.7, 2048);
}

export async function generateProcedure(procedureName) {
  const prompt = `Generate a step-by-step nursing procedure guide for "${procedureName}" in Nigeria.
Include: definition, indications, equipment needed, step-by-step procedure (numbered), nursing considerations, and documentation.
Format with clear sections and bullet points.`;

  const messages = [
    { role: 'system', content: SYSTEM_CONTEXT },
    { role: 'user', content: prompt },
  ];

  return groqChat(messages, 0.5, 2048);
}

export async function generateDiagnosis(symptoms) {
  const prompt = `Based on the following symptoms/description, provide a NANDA-I nursing diagnosis:
"${symptoms}"

Return in this format:
**Diagnosis:** [diagnosis name]
**Domain:** [domain]
**Defining Characteristics:** [list]
**Related Factors:** [list]
**Suggested Interventions:** [list]`;

  const messages = [
    { role: 'system', content: SYSTEM_CONTEXT },
    { role: 'user', content: prompt },
  ];

  return groqChat(messages, 0.3, 1024);
}

export async function generateDailyTip(role, year) {
  const prompt = `Generate a daily nursing tip for a ${role} (Year ${year}) in Nigeria. 
The tip should be practical, exam-relevant, and under 3 sentences.`;

  const messages = [
    { role: 'system', content: SYSTEM_CONTEXT },
    { role: 'user', content: prompt },
  ];

  return groqChat(messages, 0.7, 256);
}

export async function generateQuote(year) {
  const prompt = `Generate an inspiring quote for a Year ${year} nursing student in Nigeria. The quote should be short, memorable, and related to nursing studies at their level, perseverance, or healing. Include the attribution.`;

  const messages = [
    { role: 'system', content: SYSTEM_CONTEXT },
    { role: 'user', content: prompt },
  ];

  return groqChat(messages, 0.8, 200);
}

export async function generateNews() {
  const prompt = `Give me 4 brief global nursing news headlines (1 sentence each) for these regions:
1. Africa
2. Europe
3. Americas
4. Asia

Format as:
🌍 Africa: [headline]
🌍 Europe: [headline]
🌍 Americas: [headline]
🌍 Asia: [headline]`;

  const messages = [
    { role: 'system', content: SYSTEM_CONTEXT },
    { role: 'user', content: prompt },
  ];

  return groqChat(messages, 0.5, 400);
}

export async function generateRoadmap(role, year, institution) {
  const prompt = `Generate a personalized 5-milestone career roadmap for a nursing ${role} in Year ${year} at ${institution} in Nigeria.
The milestones should follow the Nigerian nursing pathway.

Return as a JSON array of 5 objects, each with: title, description, status (all set to "upcoming").
Example format:
[
  { "title": "Complete BNSc Degree", "description": "Focus on your coursework and clinical rotations at ${institution}.", "status": "upcoming" },
  ...
]`;

  const messages = [
    { role: 'system', content: SYSTEM_CONTEXT },
    { role: 'user', content: prompt },
  ];

  const result = await groqChat(messages, 0.3, 1024);
  const jsonMatch = result.match(/\[[\s\S]*\]/);
  if (jsonMatch) {
    return JSON.parse(jsonMatch[0]);
  }
  return [];
}

export async function generateCareerInsight(role, year, institution, stats) {
  const prompt = `Based on a nursing ${role} in Year ${year} at ${institution} with ${stats.minutesStudied} minutes studied and ${stats.questionsAnswered} questions answered, give a brief personalized career insight (2-3 sentences) about their nursing journey in Nigeria.`;

  const messages = [
    { role: 'system', content: SYSTEM_CONTEXT },
    { role: 'user', content: prompt },
  ];

  return groqChat(messages, 0.6, 300);
}
