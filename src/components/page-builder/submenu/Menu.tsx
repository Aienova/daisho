import React from 'react';

type MenuItem = {
  id: string;
  label: string;
  img: string;
  dataFamily: string;
  dataItem: string;
};

const menuItems: MenuItem[] = [
  {
    id: 'item-1',
    label: 'Classic',
    img: '/media/images/origami.png',
    dataFamily: 'menu',
    dataItem: 'menu-classic',
  },
  {
    id: 'item-2',
    label: 'Corner-left',
    img: '/media/images/origami.png',
    dataFamily: 'menu',
    dataItem: 'menu-corner-left',
  },
  {
    id: 'item-3',
    label: 'Corner-right',
    img: '/media/images/origami.png',
    dataFamily: 'menu',
    dataItem: 'menu-corner-right',
  },
  {
    id: 'item-4',
    label: 'eCommerce',
    img: '/media/images/origami.png',
    dataFamily: 'menu',
    dataItem: 'menu-ecommerce',
  },
];

const Menu: React.FC = () => {
  return (
    <div className="grider-3">
      {menuItems.map((item) => (
        <div
          className="item draggable"
          id={item.id}
          key={item.id}
          draggable="true"
          data-family={item.dataFamily}
          data-item={item.dataItem}
        >
          <img src={item.img} alt="Origami Logo" />
          <h3>{item.label}</h3>
        </div>
      ))}
    </div>
  );
};

export default Menu;