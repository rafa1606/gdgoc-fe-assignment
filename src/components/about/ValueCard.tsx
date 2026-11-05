import type { Value } from '../../types/api'
import studyIcon from '../../assets/format-study-groups.svg'
import circlesIcon from '../../assets/format-project-circles.svg'
import codeIcon from '../../assets/format-hands-on-workshops.svg'
import heartIcon from '../../assets/value-give-back.svg'

type ValueStyle = {
  icon: string
  bar: string
}

// Ikon buku, orang, dan kode sama dengan ikon format di Overview, jadi tetap dipakai ulang.
// Warna garis memakai token desain, bukan warna dari API (kuning di API berbeda dari Figma).
const valueStyles: Record<string, ValueStyle> = {
  'stay-curious': { icon: studyIcon, bar: 'bg-google-blue' },
  'make-room': { icon: circlesIcon, bar: 'bg-google-red' },
  'learn-by-building': { icon: codeIcon, bar: 'bg-google-yellow' },
  'give-something-back': { icon: heartIcon, bar: 'bg-google-green' },
}

type ValueCardProps = {
  value: Value
}

export function ValueCard({ value }: ValueCardProps) {
  const style: ValueStyle | undefined = valueStyles[value.id]

  return (
    <article className="flex flex-col gap-5.5 rounded-3xl border border-line bg-white p-6.25">
      <span
        aria-hidden="true"
        className={`h-1 w-9 rounded-full ${style ? style.bar : ''}`}
        style={style ? undefined : { backgroundColor: value.color }}
      />
      {style ? (
        <img src={style.icon} alt="" aria-hidden="true" className="size-6" />
      ) : (
        <span aria-hidden="true" className="text-2xl leading-6">
          {value.icon}
        </span>
      )}
      <h3 className="text-[22px] font-bold leading-[27px]">{value.title}</h3>
      <p className="text-base leading-[25px] text-muted">{value.description}</p>
    </article>
  )
}