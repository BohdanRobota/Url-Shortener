import { urlStub } from "../test/stubs/url.stub"
export const UrlsService = jest.fn().mockReturnValue({
  getUrls: jest.fn().mockResolvedValue([urlStub()]),
  createUrl: jest.fn().mockResolvedValue(urlStub()),
  deleteUrl: jest.fn().mockReturnValue(true),
  getUrlByShortName: jest.fn().mockResolvedValue(urlStub()),
})