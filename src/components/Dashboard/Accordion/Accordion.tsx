import React from 'react';

import './_Accordion.scss';
import { Arrow, ArrowWhite } from '../../../common/assets/icon/moduleIcon';
import { IDashboardTask } from '../../../common/assets/constants/interface';


interface AccordionProps {
  card: IDashboardTask;
  onClick: () => void;
  isOpen: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ card, isOpen, onClick }) => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
  <li className={ `accordion ${isOpen ? 'accordion_open' : ''}` } onClick={ onClick }>
    <p className={ `accordion__title ${isOpen ? 'accordion__title_open' : ''}` }>{ card.name }</p>
    <div className="accordion__box">
      <p className={ `accordion__priority ${card.priority === 'низкий' ? 'accordion__priority_n' : 'accordion__priority_hidden'}` }>{ card.priority }</p>
      <p className={ `accordion__priority ${card.priority === 'средний' ? 'accordion__priority_s' : 'accordion__priority_hidden'}` }>{ card.priority }</p>
      <p className={ `accordion__priority ${card.priority === 'высокий' ? 'accordion__priority_v' : 'accordion__priority_hidden'}` }>{ card.priority }</p>
      <p className={ `accordion__date ${isOpen ? 'accordion__date_open' : ''}` }>{ card.dateStart } - { card.dateEnd }</p>
    </div>
    <p className={ `accordion__description ${isOpen ? 'accordion__description_open' : ''}` }>
      { card.description }
    </p>
    <Arrow className={ `accordion__expand ${isOpen ? 'accordion__expand_hidden' : ''}` } />
    <ArrowWhite className={ `accordion__expand ${isOpen ? 'accordion__expand_open' : 'accordion__expand_hidden'}` } />
  </li>
);


export default Accordion;
