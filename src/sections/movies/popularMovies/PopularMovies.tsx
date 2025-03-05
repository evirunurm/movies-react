import { useMoviesContext } from './MoviesContext.tsx'
import { CardList } from '../../shared/components/cardList/CardList.tsx'
import { Input } from '../../shared/components/input/Input.tsx'
import { Section } from '../../shared/components/section/Section.tsx'
import { Main } from '../../shared/components/main/Main.tsx'
import { PageTitle } from '../../shared/components/pageTitle/PageTitle.tsx'

export function PopularMovies() {
    const { movies } = useMoviesContext()
    // TODO: Infinite scroll with pagination
    return (
        <Main>
            <PageTitle>Popular Movies</PageTitle>
            <Input placeholder="Seach Movies" />
            <Section title="All" amountElements={movies.length}>
                <CardList movies={movies} />
            </Section>
        </Main>
    )
}
