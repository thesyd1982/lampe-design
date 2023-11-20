import "./tile.scss"

type Props = {
    children: JSX.Element[] | JSX.Element;
    src :string ;alt:string ; w:string  ; h:string; direction:boolean | null;
  };

function Tile({children,src  ,alt , w , h, direction = false }: Props) {




  return (<div className="tile">
    {!direction &&<img  src={src} alt={alt} width={w} height={h}></img>}
    <div className="desc">{children}</div>
    {direction &&<img  src={src} alt={alt} width={w} height={h}></img>}
    </div>
  )
}

export default Tile
