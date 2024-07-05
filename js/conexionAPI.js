
async function listarVideos () {
    const conexion = await fetch('https://3001-idx-javascript-request-1720024038904.cluster-2xid2zxbenc4ixa74rpk7q7fyk.cloudworkstations.dev/videos');
    console.log(conexion);
}

listarVideos();