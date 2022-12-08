import { GOOD_SAM_MEMBER_KEY } from '../processes/Listing/constants';
import { GoodSamMembershipValidation } from '../services/appSession/types';

export function checkIsGoodSamMember(good_sam_membership_validation: GoodSamMembershipValidation) {
  return good_sam_membership_validation?.key === GOOD_SAM_MEMBER_KEY;
}
