export interface GridProps {
  gridRef: React.RefObject<HTMLDivElement>;
  children: React.ReactNode;
}

export interface GridItemProps {
  item: GridItem;
  position: Position;
  className?: string;
}

export interface GridItem {
  value: React.ReactNode;
  key: string;
  aspectRatio: number;
}

export interface Position {
  x: number;
  y: number;
  width: number;
  height: number;
}
