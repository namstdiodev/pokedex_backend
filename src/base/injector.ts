import { Request, Response, NextFunction } from "express";

import responseCode from "./response-code";

export const success_response_obj = (message, data) => {
  if (data?.paginate?.page)
    return success_response_paginate_obj(message, data.data, data.paginate);
  return {
    success: true,
    message,
    data,
  };
};

export const success_response_paginate_obj = (message, data, paginate) => ({
  success: true,
  message,
  data,
  paginate,
});

export const errorResponseObj = (message, error) => ({
  success: false,
  error,
  message,
});

export const interceptor = async (
  req: Request,
  res: any,
  next: NextFunction
) => {
  /**
   *
   * @param data
   * @param message
   * @param statusCode
   */

  res.success = (
    data = null,
    message = responseCode.SUCCESS.name,
    statusCode = responseCode.SUCCESS.code
  ) => {
    const response = success_response_obj(message, data);
    if (statusCode < 200 || statusCode > 299)
      statusCode = responseCode.SUCCESS.code;
    return res.status(statusCode).json(response);
  };

  /**
   *
   * @param error
   * @param message
   * @param statusCode
   */
  res.error = (
    error = responseCode.SERVER.name,
    message = "Failed",
    statusCode = 200
  ) => {
    const response = errorResponseObj(message, error);
    if (statusCode >= 200 && statusCode <= 299) statusCode = 500;
    return res.status(statusCode).json(response);
  };

  next();
};
