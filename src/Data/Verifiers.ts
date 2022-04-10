import Developers from './Developers';

/** Set of Discord IDs of users that are guild verifiers. */
const Verifiers = new Set<string>([
    ...Developers,
    // for now this is just the developers, but we should
    // eventually have non-developing verifiers too
]);

export default Verifiers;
