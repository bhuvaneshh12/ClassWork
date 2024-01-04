import logo from './one piece.jpg';
function Zero()
{
    return(
        <div>
            <h1>one Piece </h1>
        </div>
    )
}
function Export()
{
    return(
        <div>
            <Zero/>
                <img src={logo}></img>
        </div>
    )
}
export default Export;