import { Button, Card, Image } from '@mantine/core';
import { useState } from 'react';

export function DogCard({ src, isFavourite, onFavourites }) {
  return (
    <Card shadow="sm" padding="lg" radius="md" w={250} h={300} withBorder>
      <Card.Section>
        <Image src={src} alt={`Dog image`} fit='cover' height={200}/>
      </Card.Section>
      <Button color="blue" fullWidth mt="md" radius="md" onClick={onFavourites}>
        {isFavourite ? "Unfavourite" : "Favourite"}
      </Button>
    </Card>
  );
}