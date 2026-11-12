import { PublicDetector } from '../types/detector';
import detectorsData from './detectors.json';

export const DETECTORS: PublicDetector[] = detectorsData as unknown as PublicDetector[];
