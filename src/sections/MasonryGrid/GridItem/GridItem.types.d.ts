export interface GridItemProps {
  item: GridItemType;
  position: Position;
  className?: string;
}

export interface GridItemType {
  value: React.ReactNode;
  key: string;
  originalWidth: number;
  originalHeight: number;
}

export interface Position {
  x: number;
  y: number;
  width: number;
  height: number;
}
