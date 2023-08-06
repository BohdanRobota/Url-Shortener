// import { Test } from "@nestjs/testing"
// import { RedirectController } from "../redirect.controller";
// import { UrlsService } from "../urls.service"
// import { Url } from "../schemas/urls.schema";
// import { urlStub } from "./stubs/url.stub";
// import { Response } from "@nestjs/common";

// jest.mock('../urls.service.ts');

// describe('RedirectController', () => {
//   let redirectController: RedirectController;
//   let urlsService: UrlsService;

//   beforeEach(async () => {
//     const moduleRef = await Test.createTestingModule({
//       imports: [],
//       controllers: [RedirectController],
//       providers: [UrlsService]
//     }).compile();

//     redirectController = moduleRef.get<RedirectController>(RedirectController);
//     urlsService = moduleRef.get<UrlsService>(UrlsService);
//     jest.clearAllMocks();
//   })

//   describe('redirect', () => {
//     describe('when redirect controller is called', () => {
//       let url: Url;
//       beforeEach(async () => {
//         url = await redirectController.redirect(Response, urlStub().shortUrl)
//       })

//       test('then it should call urlsService', () => {
//         expect(urlsService.getUrlByShortName).toHaveBeenCalledWith(urlStub().shortUrl);
//       })

//       test('then it should return url and redirect', () => {
//         expect(url).toEqual(urlStub());
//       })
//     })
//   })

// })