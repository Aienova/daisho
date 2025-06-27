import React, { useEffect, useState } from 'react';

type SubMenuItem = {
  id: string;
  label: string;
  img?: string;
  dataFamily?: string;
  dataItem?: string;
};

type MenuItem = {
  icon: string;
  label: string;
  submenuTitle: string;
  submenuContent?: SubMenuItem[];
  dataContent?: string;
};

const menuData: MenuItem[] = [
  {
    icon: 'menu',
    label: 'Menu',
    submenuTitle: 'Menu',
    submenuContent: [
      { id: 'item-1', label: 'Classic', img: '/media/images/origami.png', dataFamily: 'menu', dataItem: 'menu-classic' },
      { id: 'item-2', label: 'Corner-left', img: '/media/images/origami.png', dataFamily: 'menu', dataItem: 'menu-corner-left' },
      { id: 'item-4', label: 'eCommerce', img: '/media/images/origami.png', dataFamily: 'menu', dataItem: 'menu-ecommerce' },
    ],
  },
  {
    icon: 'panorama',
    label: 'Bannières',
    submenuTitle: 'Les Bannières',
    submenuContent: [
      { id: 'item-7', label: 'Classic Banner', img: '/media/images/origami.png', dataFamily: 'banner', dataItem: 'classic-banner' },
      { id: 'item-8', label: 'Slider Banner', img: '/media/images/origami.png', dataFamily: 'banner', dataItem: 'slide-banner' },
    ],
    dataContent: 'banner',
  },
  {
    icon: 'article',
    label: 'Texte/Images',
    submenuTitle: 'Les Textes & Images',
    dataContent: 'text-image',
  },
  {
    icon: 'radio_button_checked',
    label: 'Bouton',
    submenuTitle: 'Les boutons',
    dataContent: 'button',
  },
  {
    icon: 'grid_view',
    label: 'Galeries',
    submenuTitle: 'Les galeries',
    dataContent: 'gallery',
  },
  {
    icon: 'smart_display',
    label: 'Videos',
    submenuTitle: 'Videos',
    dataContent: 'video',
  },
  {
    icon: 'assignment',
    label: 'Formulaires',
    submenuTitle: 'Subtitle',
    dataContent: 'form',
  },
  {
    icon: 'view_carousel',
    label: 'Carousels',
    submenuTitle: 'Les carousels & sliders',
    dataContent: 'carousel',
  },
  {
    icon: 'view_module',
    label: 'Tableaux',
    submenuTitle: 'Les Tableaux',
    dataContent: 'table',
  },
  {
    icon: 'code',
    label: 'HTML Perso',
    submenuTitle: 'HTML/Perso',
    dataContent: 'html',
  },
];

const Panel: React.FC = () => {
    const [dateTime, setDateTime] = useState(new Date());

      useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
    <nav id="origami-panel">
      <ul>
        <li>
          <img className="logo" src="/media/images/origami.png" alt="Origami Logo" />
        </li>
        {menuData.map((item) => (
          <li className="hover-menu" key={item.label}>
            <span className="material-symbols-outlined">{item.icon}</span>
            {item.label}
            <div className="submenu">
              <div className="container">
                <h2>
                  <span className="material-symbols-outlined">{item.icon}</span>
                  {item.submenuTitle}
                </h2>
                <p>Choisir un item</p>
                {item.submenuContent ? (
                  <div className="grider-3">
                    {item.submenuContent.map((sub) => (
                      <div
                        className="item draggable"
                        id={sub.id}
                        key={sub.id}
                        data-family={sub.dataFamily}
                        data-item={sub.dataItem}
                        draggable="true"
                      >
                        {sub.img && <img src={sub.img} alt="Origami Logo" />}
                        <h3>{sub.label}</h3>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Sous menu dynamique vide, à remplir dynamiquement plus tard
                  <div className="submenu-content" data-content={item.dataContent}></div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </nav>
     <nav id="origami-menu-top" className="white-text">
        <ul className="inliner">
          <li>Mode Preview</li>
          <li
            id="save-button"
            className="button clickable"
            data-hour={`${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`}
            data-action="save"
            data-accountid="1234"
          >
            Sauvegarder
          </li>
        </ul>
      </nav>
    <div id="panel-space"></div>




    </>
  );
};

export default Panel;