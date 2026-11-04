import { Link } from 'react-router'
import type { LearningFormat } from '../../types/api'
import { ArrowRightIcon } from '../ui/ArrowRightIcon'
import studyGroupsIcon from '../../assets/format-study-groups.svg'
import projectCirclesIcon from '../../assets/format-project-circles.svg'
import workshopsIcon from '../../assets/format-hands-on-workshops.svg'
import knowledgeSharingIcon from '../../assets/format-knowledge-sharing.svg'

type FormatStyle = {
  icon: string
  tint: string
}

const formatStyles: Record<string, FormatStyle> = {
  'study-groups': { icon: studyGroupsIcon, tint: 'bg-tint-blue' },
  'project-circles': { icon: projectCirclesIcon, tint: 'bg-tint-yellow' },
  'hands-on-workshops': { icon: workshopsIcon, tint: 'bg-tint-green' },
  'knowledge-sharing': { icon: knowledgeSharingIcon, tint: 'bg-tint-red' },
}

// Setiap cta dari API diarahkan ke kategori pertanyaan di halaman Contact.
const ctaCategories: Record<string, string> = {
  'join-a-group': 'joining-learning',
  'start-a-circle': 'collaboration',
  'see-upcoming': 'general-inquiry',
  'propose-a-session': 'speaking-sharing',
}

// "join-a-group" -> "Join a group"
function formatCta(slug: string) {
  const text = slug.replace(/-/g, ' ')
  return text.charAt(0).toUpperCase() + text.slice(1)
}

type FormatCardProps = {
  format: LearningFormat
}

export function FormatCard({ format }: FormatCardProps) {
  const style: FormatStyle | undefined = formatStyles[format.id]
  const category = ctaCategories[format.cta]
  const contactPath = category ? `/contact?category=${category}` : '/contact'

  return (
    <article className="flex flex-col gap-5 rounded-3xl bg-white p-6 sm:flex-row sm:gap-6 sm:p-7">
      <div
        aria-hidden="true"
        className={`flex size-13 shrink-0 items-center justify-center rounded-2xl ${
          style ? style.tint : 'bg-surface'
        }`}
      >
        {style ? (
          <img src={style.icon} alt="" className="size-6" />
        ) : (
          <span className="text-2xl">{format.icon}</span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3.5">
        <h3 className="text-[27px] font-bold leading-[30px]">{format.name}</h3>
        <p className="text-base leading-[25px] text-muted">{format.description}</p>
        <Link
          to={contactPath}
          className="group mt-auto inline-flex items-center gap-2 self-start text-[13px] font-medium leading-4 text-google-blue-dark"
        >
          {formatCta(format.cta)}
          <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  )
}