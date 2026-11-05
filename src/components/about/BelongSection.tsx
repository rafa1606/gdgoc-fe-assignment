import { getRoles } from '../../api/endpoints'
import { useFetch } from '../../hooks/useFetch'
import { curlyApostrophes } from '../../utils/text'
import { EmptyState } from '../ui/EmptyState'
import { ErrorState } from '../ui/ErrorState'
import { LoadingState } from '../ui/LoadingState'
import { SectionLabel } from '../ui/SectionLabel'
import { TextLink } from '../ui/TextLink'

export function BelongSection() {
  const { state, retry } = useFetch(getRoles)

  return (
    <section
      aria-labelledby="belong-heading"
      className="px-4 pb-12 sm:px-8 xl:px-24 xl:pb-22"
    >
      <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[2fr_3fr] lg:gap-12 xl:grid-cols-[400px_1fr] xl:gap-24">
        <div className="flex flex-col gap-5.5">
          <SectionLabel>People, not labels</SectionLabel>
          <h2
            id="belong-heading"
            className="text-3xl font-bold leading-[1.125] sm:text-4xl xl:text-5xl"
          >
            There’s more than one way to contribute.
          </h2>
          <p className="text-lg leading-7 text-muted">
            You can be learning one day and helping someone else the next. A community grows
            through both.
          </p>
        </div>

        <div className="flex flex-col gap-7">
          {state.status === 'loading' && <LoadingState label="Loading ways to join..." />}
          {state.status === 'error' && (
            <ErrorState message={state.error.message} onRetry={retry} />
          )}
          {state.status === 'success' &&
            (state.data.length === 0 ? (
              <EmptyState
                title="No roles yet"
                description="Ways to take part will show up here once they are published."
              />
            ) : (
              <ul className="flex flex-col gap-7">
                {state.data.map((role) => (
                  <li key={role.id} className="border-b border-line pb-3.5">
                    <h3 className="text-2xl font-bold leading-[31px] sm:text-[28px]">
                      {role.title}
                    </h3>
                    <p className="mt-3.5 text-base leading-[26px] text-muted sm:text-[17px]">
                      {curlyApostrophes(role.description)}
                    </p>
                  </li>
                ))}
              </ul>
            ))}

          <TextLink to="/contact?category=collaboration">Let’s talk about getting involved</TextLink>
        </div>
      </div>
    </section>
  )
}