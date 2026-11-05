import { homeTracks } from '../../data/homeContent'
import { SectionHeader } from '../overview/SectionHeader'
import { TrackCard } from '../overview/TrackCard'
import { TextLink } from '../ui/TextLink'

export function TrackDiscoverySection() {
  return (
    <section
      id="tracks"
      aria-labelledby="home-tracks-heading"
      className="px-4 pb-12 pt-4 sm:px-8 xl:px-24 xl:pb-22"
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeader
          headingId="home-tracks-heading"
          label="Find your starting point"
          title="Many interests. One shared journey."
          description="Follow what excites you. Explore a track, then connect the dots with others."
        />
        <div>
          <TextLink to="/overview">See the overview</TextLink>
        </div>
      </div>

      <div className="mt-9 grid gap-6 lg:grid-cols-3">
        {homeTracks.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </div>
    </section>
  )
}