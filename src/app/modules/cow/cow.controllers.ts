import { Request, Response } from 'express';
import catchAsync from '../../../share/catchAsync';
import httpStatus from 'http-status';
import sendResponse from '../../../share/sendResponse';
import { CowServices } from './cow.services';

const createCow = catchAsync(async (req: Request, res: Response) => {
  const { cow } = req.body;
  // console.log(user);

  const result = await CowServices.createCows(cow);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user created successfully  ',
    data: result,
  });
});

// get cow
const getCows = catchAsync(async (req: Request, res: Response) => {
  const result = CowServices.getCows();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user created successfully  ',
    data: result,
  });
});

// get single cow
const getSingleCow = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = CowServices.getSingleCow(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user created successfully  ',
    data: result,
  });
});

// update cow
const updateCow = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = CowServices.updateCow(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user created successfully  ',
    data: result,
  });
});

// delete cow
const deleteCow = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = CowServices.deleteCow(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user created successfully  ',
    data: result,
  });
});

export const CowControllers = {
  createCow,
  getCows,
  getSingleCow,
  updateCow,
  deleteCow,
};
