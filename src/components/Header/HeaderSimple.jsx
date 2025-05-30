import { useState } from 'react';
import { Container, Group } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './HeaderSimple.module.css';

const links = [
  { link: '/', label: 'Home' },
  { link: '/search', label: 'Search' },
  { link: '/favourites', label: 'Favourites' },
];

export function HeaderSimple() {
  const [active, setActive] = useState(window.location.pathname || '/');

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={() => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        CSCC01 Summer 2025
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
      </Container>
    </header>
  );
}