export type LearningOutcome = {
  pathway: string
  practice: string
  outcome: string
}

export const learningOutcomes: LearningOutcome[] = [
  {
    pathway: 'Research & discovery',
    practice: 'Listening, problem framing, and testing assumptions',
    outcome: 'A research insight and a focused problem brief',
  },
  {
    pathway: 'Design & creativity',
    practice: 'Ideation, user flows, and prototype feedback',
    outcome: 'An interactive prototype and a design story',
  },
  {
    pathway: 'Development',
    practice: 'Coding, testing, and connecting tools',
    outcome: 'A working demo with a clear explanation',
  },
]