import React from 'react';
import DeletePopUp from '../popup/Action/DeletePopUp';
import SettingPopUp from '../popup/Action/SettingPopUp';



const Website: React.FC = () => {


  
  return (

    <>

    <section id="origami-website" className='top-menu-margin'>

          <section id="drag-drop-here" className="centralizer fullHeight">

                  <div className="square">
                      <h2><span className="material-symbols-outlined big-text">place_item</span><br></br>Fait un drag & drop ici</h2>
                  </div>

          </section>

    </section>

    <DeletePopUp />
    <SettingPopUp />
    </>

  );
};

export default Website;