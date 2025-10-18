// Ce fichier est optionnel mais recommandé pour la documentation du projet.
// Il décrit la structure des données attendue par Hayase.

export type Accuracy = 'high' | 'medium' | 'low';

export interface TorrentResult {
  title: string;
  link: string;
  id?: number;
  seeders: number;
  leechers: number;
  downloads: number;
  accuracy: Accuracy;
  hash: string;
  size: number;
  date: Date;
}

export interface TorrentQuery {
  anilistId: number;
  titles: string[];
  episode?: number;
}

