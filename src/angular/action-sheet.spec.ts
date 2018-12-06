import { ActionSheetMock } from './action-sheet';

describe('ActionSheetMock', () => {
    let classUnderTest: any;

    beforeEach(() => {
        classUnderTest = new ActionSheetMock();
    });

    it('should initialize', () => {
        expect(classUnderTest).toBeDefined();
    });

    describe('present', () => {
        it('should be defined', () => {
            expect(classUnderTest.present).toBeDefined();
        });

        it('should return empty promise', done => {
            classUnderTest.present().then(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('dismiss', () => {
        it('should be defined', () => {
            expect(classUnderTest.dismiss).toBeDefined();
        });

        it('should return empty promise', done => {
            classUnderTest.dismiss().then(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('instance', () => {
        it('should return new instance of ActionSheetMock', () => {
            let actionSheet = ActionSheetMock.instance();

           expect(actionSheet).toEqual(jasmine.any(ActionSheetMock));
        });
    });
});
