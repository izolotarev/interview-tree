import 'bootstrap-icons/font/bootstrap-icons.css';

function Tree() {
  return (
    <button className='btn-red' onClick={() => alert('123')}>
      <i className="bi bi-plus-circle" color="red"></i>
    </button>
  );
}

export default Tree;