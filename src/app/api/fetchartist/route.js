
export async function POST() {
    // A list of all characters that can be chosen.
    const characters = 'abcdefghijklmnopqrstuvwxyz1234567890';
    // Gets a random character from the characters string.
    const randomCharacter = characters.charAt(Math.floor(Math.random() * characters.length));
    let randomSearch = characters.charAt(Math.floor(Math.random() * characters.length));
    const randomOffset = Math.floor(Math.random() * 5);

    const id = process.env.CLIENT_ID;
    const sc = process.env.CLIENT_SC;
    let response = await fetch("https://accounts.spotify.com/api/token", {
        body: `grant_type=client_credentials&client_id=${id}&client_secret=${sc}`,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST"
    })
    const token = await response.json();

    let tres = await fetch(`https://api.spotify.com/v1/search?q=${randomCharacter}${randomSearch}&type=artist&offset=${randomOffset}`
        ,
        {
            headers: {
                Authorization: `Bearer ${token.access_token}`
            },
            method: "GET"
        })
    const tracks = await tres.json();
    return Response.json({ tracks });
}


