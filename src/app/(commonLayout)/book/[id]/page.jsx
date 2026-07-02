const SingleBookDetails = async ({ params }) => {
    const { id } = await params
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/book.json`, {
        cache: "no-cache"
    })
    const books = await res.json()
    const book = books.find((item) => item.id === Number(id))
   
    return (
        <div>
            This is book {id}
        </div>
    );
};

export default SingleBookDetails;