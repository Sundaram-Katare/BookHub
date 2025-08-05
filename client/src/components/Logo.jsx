import { Link} from "react-router-dom";
function Logo({classname,clss}) {
  return (
    <div className={`${clss}`}>
      <Link to="/" className={`${classname}`}>
        Book<span className="text-black">Hub</span>
      </Link>
    </div>
  );
}

export default Logo;
