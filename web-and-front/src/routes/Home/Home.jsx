export default function Home() {
    document.title - "Home"
    if(sessionStorage.getItem("token-user")){
        return(
            <h1>VOCÊ ESTÁ NA HOME!!!!!!!!</h1>
        )}
    else{
        window.location="/login"
    }
}