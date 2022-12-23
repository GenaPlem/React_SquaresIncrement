import './style.scss';

const SquareComponent = ({ increment, decrement, counter }) => (
    <div className="square">
        <button type="button" className="square__button" onClick={() => decrement()}>-</button>
        <input className="square__counter" type="text" value={counter} disabled></input>
        <button type="button" className="square__button" onClick={() => increment()}>+</button>
    </div>
)

export default SquareComponent