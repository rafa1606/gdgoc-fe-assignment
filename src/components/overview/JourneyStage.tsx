import type { JourneyStep } from '../../types/api'

type JourneyStageProps = {
  step: JourneyStep
}

export function JourneyStage({ step }: JourneyStageProps) {
  return (
    <li className="flex flex-col gap-5">
      <span className="text-[38px] font-bold leading-[48px] text-google-blue-dark">
        {String(step.step).padStart(2, '0')}
      </span>
      <hr className="border-line" />
      <h3 className="text-[26px] font-bold leading-[29px]">{step.title}</h3>
      <p className="text-base leading-[25px] text-muted">{step.description}</p>
    </li>
  )
}