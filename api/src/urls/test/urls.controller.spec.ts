import { Test } from "@nestjs/testing"
import { UrlsController } from "../urls.controller"
import { UrlsService } from "../urls.service"
import { Url } from "../schemas/urls.schema";
import { urlStub } from "./stubs/url.stub";
import { CreateUrlDto } from "../dto/createUrl.dto";

jest.mock('../urls.service.ts');

describe('UrlsController', () => {
  let urlsController: UrlsController;
  let urlsService: UrlsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [UrlsController],
      providers: [UrlsService]
    }).compile();

    urlsController = moduleRef.get<UrlsController>(UrlsController);
    urlsService = moduleRef.get<UrlsService>(UrlsService);
    jest.clearAllMocks();
  })

  describe('getUrls', () => {
    describe('when getUrls is called', () => {
      let urls: Url[];
      beforeEach(async () => {
        urls = await urlsController.getUrls()
      })

      test('then it should call urlsService', () => {
        expect(urlsService.getUrls).toHaveBeenCalled();
      })

      test('then it should return urls', () => {
        expect(urls).toEqual([urlStub()])
      })
    })
  })

  describe('createUrl', () => {
    describe('when createUrl is called', () => {
      let url: Url;
      let createUrlDto: CreateUrlDto;

      beforeEach(async () => {
        createUrlDto = {
          longUrl: urlStub().longUrl
        }
        url = await urlsController.createUrl(createUrlDto);
      })

      test('then it should call urlsService', () => {
        expect(urlsService.createUrl).toHaveBeenCalledWith(createUrlDto.longUrl);
      })

      test('then it should return url', () => {
        expect(url).toEqual(urlStub())
      })
    })
  })
  describe('deleteUrl', () => {
    describe('when deleteUrl is called', () => {
      let deleteResult: boolean;

      beforeEach(async () => {
        deleteResult = await urlsController.deleteUrl(urlStub().urlCode);
      })

      test('then it should call urlsService', () => {
        expect(urlsService.deleteUrl).toHaveBeenCalledWith(urlStub().urlCode);
      })

      test('then it should return boollean result', () => {
        expect(deleteResult).toBe(true);
      })
    })
  })
})