import React from 'react';
import classes from './QuoteCard.module.css';
import quoteBlack from '../../icons/quote.svg';
import quoteWhite from '../../icons/quote_white.svg';
import { QuoteData } from '../../interfaces/Quote';
import Typewriter from '../TypeWriper';

export const QuoteCard = ({quote}: {quote: QuoteData}) => {
	return (
		<div className={classes.QuoteCard}>
			<div className={classes.QuoteCard__inner}>
				<div className={classes.QuoteCard__front}>
					<div className={classes.QuoteCard__style}>
						<img
							src={quoteBlack}
							alt=""
							className={classes.QuoteCard__quote__icon}
						/>
					</div>
					<div className={classes.QuoteCard__text}>
						<Typewriter text={quote.quote} delay={10} infinite={false} />
					</div>
					<div
						className={[
							classes.QuoteCard__style,
							classes.QuoteCard__style_bot,
						].join(' ')}>
						<img
							src={quoteBlack}
							alt=""
							className={classes.QuoteCard__quote__icon}
						/>
					</div>
				</div>
				<div className={classes.QuoteCard__back}>
					<div className={classes.QuoteCard__style}>
						<img
							src={quoteWhite}
							alt=""
							className={classes.QuoteCard__quote__icon}
						/>
					</div>
					<div className={classes.QuoteCard__text}>
						{quote.author}
					</div>
					<div
						className={[
							classes.QuoteCard__style,
							classes.QuoteCard__style_bot,
						].join(' ')}>
						<img
							src={quoteWhite}
							alt=""
							className={classes.QuoteCard__quote__icon}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
