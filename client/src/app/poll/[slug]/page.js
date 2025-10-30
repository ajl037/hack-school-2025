export default function userPage({ params }) {
    const id = params.slug;
    return <h1>this is the id: {id}</h1>
}