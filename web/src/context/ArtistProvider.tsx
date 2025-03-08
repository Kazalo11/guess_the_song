import { ArtistOption } from "@/mapping/ArtistsToArtistOption";
import { createContext, ReactNode, useContext } from "react";

interface ArtistContextType {
  artist: ArtistOption | null;
  setArtist: React.Dispatch<React.SetStateAction<ArtistOption | null>>;
}

const ArtistContext = createContext<ArtistContextType | undefined>(undefined);

export function ArtistProvider({
  children,
  value,
}: {
  children: ReactNode;
  value: ArtistContextType;
}) {
  return (
    <ArtistContext.Provider value={value}>{children}</ArtistContext.Provider>
  );
}

export function useArtist() {
  const context = useContext(ArtistContext);
  if (context === undefined) {
    throw new Error("useArtist must be used within an ArtistProvider");
  }
  return context;
}
