import { Link} from "react-router-dom";
function Logo({classname,clss}) {
  return (
    <div className={`${clss}`}>
      <Link to="/" className={`${classname} dark:text-blue-400`}>
        Book<span className="text-black dark:text-white ">Hub</span>
      </Link>
    </div>
  );
}

export default Logo;
