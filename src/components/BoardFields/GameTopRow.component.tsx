import React, { memo } from 'react';
import Deck from './Deck.component';
import GoalPileWrapper from './GoalPileWrapper.component';
import { Row } from 'antd';
import styles from './BoardFileds.module.css';

/**
 * Component that unites the two elements of the first game row: the deck and the goal spots
 */
function GameTopRow() {
  return (
    <Row
      className={styles.boardDeckRow}
      align='middle'
      justify={'space-between'}
    >
      <Deck />
      <GoalPileWrapper />
    </Row>
  );
}

export default memo(GameTopRow);
