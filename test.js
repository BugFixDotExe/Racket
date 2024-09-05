async function getData() {
    //const book_title_book_author =
    const url = "https://bookcover.longitood.com/bookcover?book_title=The+Pale+Blue+Dot&author_name=Carl+Sagan";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
}

getData();
