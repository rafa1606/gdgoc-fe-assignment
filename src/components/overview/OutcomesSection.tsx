import { learningOutcomes } from '../../data/learningOutcomes'

const headerCell = 'px-3.5 py-5 text-xs font-medium leading-[15px] text-muted'

// Di layar kecil baris tabel ditumpuk; label kolom diambil dari atribut data-label.
const stackedLabel =
  'before:mb-0.5 before:block before:text-xs before:font-medium before:text-ink before:content-[attr(data-label)] md:before:hidden'

export function OutcomesSection() {
  return (
    <section
      aria-labelledby="outcomes-heading"
      className="px-4 pb-12 sm:px-8 xl:px-24 xl:pb-20"
    >
      <h2 id="outcomes-heading" className="text-3xl font-bold sm:text-4xl">
        From an interest to something you can show.
      </h2>

      <div className="mt-8 overflow-hidden rounded-2xl border border-line">
        <table className="block w-full border-collapse text-left md:table md:table-fixed">
          <colgroup>
            <col className="md:w-[23.4%]" />
            <col className="md:w-[38.1%]" />
            <col className="md:w-[38.5%]" />
          </colgroup>
          <thead className="hidden border-b border-line bg-surface md:table-header-group">
            <tr>
              <th scope="col" className={`${headerCell} md:pl-7`}>
                Pathway
              </th>
              <th scope="col" className={headerCell}>
                What you can practice
              </th>
              <th scope="col" className={`${headerCell} md:pr-7`}>
                A possible outcome
              </th>
            </tr>
          </thead>
          <tbody className="block divide-y divide-line md:table-row-group">
            {learningOutcomes.map((row) => (
              <tr key={row.pathway} className="block px-5 py-5 md:table-row md:p-0">
                <th
                  scope="row"
                  className="block text-[17px] font-medium leading-[23px] md:table-cell md:py-7 md:pl-7 md:pr-3.5 md:align-top"
                >
                  {row.pathway}
                </th>
                <td
                  data-label="What you can practice"
                  className={`mt-3 block text-base leading-[25px] text-muted md:mt-0 md:table-cell md:px-3.5 md:py-7 md:align-top ${stackedLabel}`}
                >
                  {row.practice}
                </td>
                <td
                  data-label="A possible outcome"
                  className={`mt-3 block text-base leading-[25px] text-muted md:mt-0 md:table-cell md:py-7 md:pl-3.5 md:pr-7 md:align-top ${stackedLabel}`}
                >
                  {row.outcome}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-8 text-[13px] leading-5 text-muted">
        Illustrative learning outcomes. Topics and opportunities are shared through community
        updates.
      </p>
    </section>
  )
}