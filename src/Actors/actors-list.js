import React from 'react';

const ActorsList = ({ name, birthdate, birthplace, birthname }) => (
    <li className="mdl-list__item mdl-list__item--two-line">
        <span className="mdl-list__item-primary-content">
            <i className="material-icons mdl-list__item-avatar">person</i>
            <span>{name}</span>
            <span class="mdl-list__item-sub-title">Named: {birthname}</span>
            <span className="mdl-list__item-text-body">
      </span>
        </span>
        <span className="mdl-list__item-secondary-content">
            <a className="mdl-list__item-secondary-action" href="#"><i className="material-icons">star</i></a>
        </span>

    </li>
);

export default ActorsList;