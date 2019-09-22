export class FetchStatus {
  static DEFAULT = "__DEFAULT__";

  static FETCHING = "__FETCHING__";

  static SUCCESS = "__SUCCESS__";

  static FAILURE = "__FAILURE__";

  constructor(status = FetchStatus.DEFAULT) {
  	if (typeof status === "object") {
  		return Object.assign(this, status);
  	}

  	this.status = status;
  }

  static default() {
  	return new FetchStatus(FetchStatus.DEFAULT);
  }

  static fetching() {
  	return new FetchStatus(FetchStatus.FETCHING);
  }

  static success() {
  	return new FetchStatus(FetchStatus.SUCCESS);
  }

  static failure() {
  	return new FetchStatus(FetchStatus.FAILURE);
  }

  isDefault() {
  	return this.status === FetchStatus.DEFAULT;
  }

  isFetching() {
  	return this.status === FetchStatus.FETCHING;
  }

  isSuccess() {
  	return this.status === FetchStatus.SUCCESS;
  }

  isFailure() {
  	return this.status === FetchStatus.FAILURE;
  }
}

export default FetchStatus;
