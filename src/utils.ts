import {config} from './config';
import {QuantizationBytes} from './types';

export const getURL = (quantizationBytes: QuantizationBytes) => {
  return `${config['BASE_PATH']}/${
      quantizationBytes ? `quantized/${quantizationBytes}/` :
                          ''}model-name/model.json`;
};