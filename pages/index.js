import Nav from '../mods/Layout/Nav'
import SearchBar from '../mods/Layout/SearchBar'
import Head from 'next/head'

export default function Index() {
    let loggedIn = true
    return (
    <>
        <Head>
            <title>FiReSearch</title>
        </Head>
        <Nav/>
        <SearchBar/>
    </>
    )
}