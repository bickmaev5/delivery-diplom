import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(({ spacing, palette, typography }) => ({
  root: {
    marginBottom: spacing(4),
    padding: spacing(2, 0),
    backgroundColor: palette.primary.main,
    minHeight: typography.pxToRem(50),
  },
  img: {
    borderRadius: '50%',
    maxWidth: '50px',
  },
  username: {
    marginRight: spacing(2),
    color: palette.common.white,
  }
}), { name: 'Header'});