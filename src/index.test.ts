import { describe, expect, it } from 'vitest';

import * as shared from './index';

describe('package entry point', () => {
  it('loads as an ES module', () => {
    expect(shared).toBeTypeOf('object');
  });
});
