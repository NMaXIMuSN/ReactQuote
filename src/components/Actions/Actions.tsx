import React from 'react';
import classes from './Actions.module.css';
import refreshIcon from '../../icons/refresh.svg';
import prevIcon from '../../icons/prev.svg';
import { Props } from './Props';

export const Actions = (props: Props) => {
	return (
		<div className={classes.Actions}>
			<div className={classes.Actions__item} onClick={() => props.onPrev()}>
        <img className={classes.Actions__item__icon} src={prevIcon} alt="" />
			</div>
			<div className={classes.Actions__item} onClick={() => props.onRandom()}>
        <img className={classes.Actions__item__icon} src={refreshIcon} alt="" />
			</div>
			<div className={[classes.Actions__item, classes['Actions__item-next']].join(' ')} onClick={() => props.onNext()}>
        <img className={classes.Actions__item__icon} src={prevIcon} alt="" />
			</div>
		</div>
	);
};
