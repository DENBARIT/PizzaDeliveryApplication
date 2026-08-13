import {Link} from 'react-router-dom'

function Button({children,disabled,to}){

    const className="inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors  duration-300 hover:bg-yellow-300  focus:bg-yellow-300  focus:outline-none focus:ring    focus:ring-offset-2  focus:ring-yellow-300 disabled:cursor-not-allowed   active:bg-yellow-900  sm:px-6 sm:py-4";
    if (to) return (<Link to={to} className={className}>{children}</Link> );
    return <button  className={className} disabled={disabled}>
{children}
    </button>
}
export  default   Button;