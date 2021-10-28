const Modal = props => {

    const {show, edit, setEdit, handleEdit, deets} = props; 
        if (!show){
            return null
        }
    
    
        return (
            <div className="modal">
                <form onSubmit={(e)=> handleEdit(e, deets.id)} className="modal">
                <input type="text" content="bio"  placeholder="update bio..."  onChange={(e) => setEdit(e.target.value)} className="modal"/>
                <button type="submit">Update Bio</button>
                </form>
            </div>
        )
    }
    
    export default Modal;